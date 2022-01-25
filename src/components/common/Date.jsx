function Date({ value, onChange, name = "date" }) {
  return (
    <span>
      {/* <span></span> */}
      <input
        className="datepicker-input"
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        style={{
          border: "2px solid black",
          borderRadius: "5px",
        }}
      />
    </span>
  );
}

export default Date;
