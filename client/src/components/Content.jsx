import React from "react";
import { ENDPOINT } from "../App";

function Content(props) {
    console.log(props.data)
    const {data} = props;

    const loadRows = () => {
        if (data) {
                for (let i=0; i < data.id; i++) { 
                    return(
                    <tr>
                        <td>
                        <input type="text" name="value" value={data[i].id + 1}/>
                        </td>
                        <td>
                            <input type="text" name="value" defaultValue={data[i].value}/>
                        </td>
                    </tr>
                    )
                }
            }
        }
    


    return (
        <div className="table-warpper">
            <form>
                <table className="myTable">
                
                {loadRows()}
                    <tr>
                        <td>
                            {data[1].id}
                        </td>
                        <td>
                            {data[1].value}
                        </td>
                    </tr>
                </table>
                <button type="submit"> отправить</button>
            </form>
        </div>
    );
}
export default Content;