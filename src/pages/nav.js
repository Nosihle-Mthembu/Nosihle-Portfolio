function Navigation(){

    return(
    <>
      {/* <h1>TotalBalance</h1>
      <div>R 14100</div>
      <div style={{display:"flex"}}>
        <div style={{width:50, height:50}}>
            <div>Income</div>
            <div>R00</div>
        </div>
        <div style={{width:50, height:50}}>
            <div>Expense</div>
            <div>R141</div>
        </div>
      </div>

      <div>History of your transaction</div>
      <div>
        <div>Grocery</div>
        <div>R 141</div>
        <div>
            <div>delete</div>
            <div>edit</div>
        </div>
      </div> */}
      <div style={{display:"flex",
        justifyContent:"center",
        flexDirection: "column",
        alignItems:"center"}}>
        <div>Add a new transction</div>
        <input type="text" placeholder="ADD TRANSACTION"/>
        <input type="text" placeholder="ADD TRANSACTION"/>
        <select>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button>Add a transaction</button>
      </div>
    </>
    )
}
export default Navigation