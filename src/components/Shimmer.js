const Shimmer = () => {
  return (
    <div className="restaurant-list" data-testid="shimmer">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;

// Shimmer is a dummy restaurant card.
