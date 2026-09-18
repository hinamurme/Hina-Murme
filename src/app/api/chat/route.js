import { GoogleGenAI } from "@google/genai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Gemini 2.0 Flash has been shut down. Keep this configurable so the model can
// be changed in Vercel without another code deployment.
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";

// The system prompt + resume data live ONLY on the server.
// The client never sends them, and the API key never leaves this file.
const SYSTEM_PROMPT = `You are Hina Murme's portfolio assistant. ONLY provide real information about Hina based on the resume data below. Keep responses friendly, concise (under 3 sentences), and professional. Only answer based on this information. If asked something not in the resume, politely say you only have information from the resume.

RESUME DATA:
Name: Hina Murme
Role: Project Engineer (Full Stack Developer)
Experience: 1+ year
Email: murmehina45@gmail.com
Phone: +91-9284042371
Location: Hyderabad, India

Skills: JavaScript (ES6+), Python, React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Ant Design, Material UI (MUI), Node.js, Express.js, REST APIs, MongoDB, Mongoose, MySQL, Firebase (Firestore, Realtime Database), JWT Authentication, Firebase Authentication, OTP Verification, RBAC, Razorpay, PayU, HDFC SmartGateway, OpenAI API, AI Chatbot, Git, GitHub, Postman, VS Code, MongoDB Compass, Redis, PM2, Nginx, AWS (EC2, S3), Vercel, Firebase Hosting, Hostinger

Experience:
- Project Engineer (Full Stack Developer) at Dexterous Technology (Aug 2025 – Present, Hyderabad). Developed scalable full-stack web applications using MERN Stack and Next.js. Built responsive user interfaces with React.js, Tailwind CSS, Bootstrap, Ant Design, and Material UI. Designed secure REST APIs, authentication (JWT/Firebase), and role-based access control (RBAC). Developed EW Shopping, Grocery Website, Food Delivery Platform, Employee Task Management System, and Admin Panels. Integrated Shiprocket, Razorpay, PayU, Firebase, Google Maps API. Optimized performance using MongoDB indexing, Redis caching, PM2, and Nginx. Managed deployment with AWS, Git, GitHub, Postman, Vercel, Hostinger.
- Software Developer Intern at Naresh i Technologies (Feb 2025 – Jul 2025, Hyderabad). Built full-stack web applications using Python, MySQL, HTML, CSS, JavaScript, Basic AI, MongoDB. Developed REST APIs, CRUD operations, authentication, and responsive UIs. Worked with Git, GitHub, Postman.

Projects:
- EW Shopping – AI-Powered Multi-Vendor Marketplace (Next.js, React.js, Node.js, Express.js, MongoDB, Redis). Customer Website, Seller Panel, Admin Panel, product/category/order/coupon/wallet/inventory management. Integrated Shiprocket, Razorpay, Firebase OTP, AI-powered search. Optimized with Redis, PM2, Nginx.
- Grocery E-Commerce Website (React.js, Node.js, Express.js, MongoDB). Full online grocery platform with catalog, cart, wishlist, checkout, order management, secure auth, responsive UI.
- Food Delivery Platform (React.js, Node.js, MongoDB, Socket.IO). Customer website + admin dashboard. Restaurant, menu, order, delivery, payment management. Real-time order tracking with Socket.IO.
- Employee Task Management System (React.js, Node.js, Express.js, MongoDB). Task assignment, employee management, Admin Panel with tracking, reports, RBAC.
- Admin Management Panel (React.js, Node.js, Express.js, MongoDB). Centralized dashboard for users, products, orders, reports, analytics. RBAC, auth, responsive UI.
- Additional Projects (Next.js, React.js, Tailwind CSS, OpenAI API, Firebase): Personal Portfolio Website; AI Website Assistant (Chatbot) with OpenAI API; Realtime Chat Application with Firebase.

Education: Bachelor of Science (B.Sc.) in Computer Science from Dr. Babasaheb Ambedkar Marathwada University, Aurangabad — 65.60%.

Portfolio: https://hina-murme.vercel.app/
GitHub: https://github.com/hinamurme
LinkedIn: https://www.linkedin.com/in/hina-murme/`;

export async function POST(req) {
  try {
    const body = await req.json().catch(() => null);
    const message =
      body && typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      return Response.json(
        { success: false, error: "Message is required." },
        { status: 400 }
      );
    }
    if (message.length > 1000) {
      return Response.json(
        { success: false, error: "Message is too long." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set.");
      return Response.json(
        { success: false, error: "AI service is not configured." },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const result = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: message,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 200,
      },
    });

    const reply =
      (result && typeof result.text === "string" && result.text.trim()) ||
      "Sorry, I couldn't process that request.";

    return Response.json({ success: true, reply }, { status: 200 });
  } catch (err) {
    console.error("Gemini chat error:", err);

    const status = err?.status || err?.response?.status;
    const providerMessage =
      typeof err?.message === "string" ? err.message.toLowerCase() : "";

    let error = "The AI service is temporarily unavailable. Please try again.";
    if (status === 401 || status === 403 || providerMessage.includes("api key")) {
      error = "The AI service key is invalid or unavailable.";
    } else if (status === 429 || providerMessage.includes("quota")) {
      error = "The AI service is busy. Please try again shortly.";
    }

    return Response.json(
      { success: false, error },
      { status: status >= 400 && status < 600 ? status : 502 }
    );
  }
}
