const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? '#59e391' : 'white',
  };

  return (
    <div onClick={props.holdDice} style={styles} className="die-container">
      <h2>{props.value}</h2>
    </div>
  );
};
export default Die;
