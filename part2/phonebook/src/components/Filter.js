const Filter = ({ value, change }) => {
  return (
    <div>
      filter shown with{" "}
      <input
        value={value}
        onChange={(event) => {
          change(event.target.value);
        }}
      />
    </div>
  );
};

export default Filter;
