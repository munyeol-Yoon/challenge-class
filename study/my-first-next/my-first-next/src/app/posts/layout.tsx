function layout({ children }) {
  return (
    <div>
      <div>여기 부터는 POSTs 아래</div>
      {children}
    </div>
  );
}

export default layout;
