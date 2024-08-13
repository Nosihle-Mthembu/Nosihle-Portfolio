function Currency(){

    return(<>
        <div>Currency Converter</div>
        <input type="text" />
        <input type="text" />
        <div style={{display:"flex"}}> 
            <div>
                <select>
                    <option value=""></option>
                    <option value="">ZAR</option>
                    <option value="">USD</option>
                    <option value="">RUP</option>
                    <option value="">UERO</option>
                </select> 
            </div>
            <div>
                <select>
                    <option value=""></option>
                    <option value="">ZAR</option>
                    <option value="">USD</option>
                    <option value="">RUP</option>
                    <option value="">UERO</option>
                </select>
            </div>
        </div>
        <button>Convert</button>
    </>)
}
export default Currency