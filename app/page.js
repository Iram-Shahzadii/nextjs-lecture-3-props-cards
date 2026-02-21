import Card from "./components/Card";

export default function Home() {
  const users = [
    { id: 1, name: "Sara Ahmed", role: "Frontend Developer", image: "https://randomuser.me/api/portraits/women/44.jpg", bio: "Learning Next.js & React" },
    { id: 2, name: "Hina Riaz", role: "UI Designer", image: "https://randomuser.me/api/portraits/women/55.jpg", bio: "Figma & Design" },
    { id: 3, name: "Aqsa", role: "QA Engineer", image: "https://randomuser.me/api/portraits/women/68.jpg", bio: "Testing & Automation" },
    { id: 4, name: "Ali Khan", role: "Backend Developer", image: "https://randomuser.me/api/portraits/men/34.jpg", bio: "Node.js & Databases" },
    { id: 5, name: "Omar Farooq", role: "Fullstack Developer", image: "https://randomuser.me/api/portraits/men/78.jpg", bio: "MERN Stack Enthusiast" },
    { id: 6, name: "Zain Malik", role: "DevOps Engineer", image: "https://randomuser.me/api/portraits/men/12.jpg", bio: "AWS & CI/CD" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Lecture 3 – Props & Reusable Components 🚀
      </h1>

      {/* Responsive grid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map(user => (
          <Card
            key={user.id}
            name={user.name}
            role={user.role}
            image={user.image}
            bio={user.bio}
          />
        ))}
      </div>
    </div>
  );
}