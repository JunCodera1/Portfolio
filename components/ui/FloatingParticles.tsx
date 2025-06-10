export const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-bounce"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
      }}
    />
  ));
  
  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{particles}</div>;
};