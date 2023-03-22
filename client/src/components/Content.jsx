import React from "react";

function Content(props) {
    console.log(props.data)
    const {data} = props;
    
    return (
        <div className="table-warpper">
            <table className="myTable">
            <tr>
                    <td>
                        {data[0].id}
                    </td>
                    <td>
                        {data[0].value}
                    </td>
                </tr>
                <tr>
                    <td>
                        {data[1].id}
                    </td>
                    <td>
                        {data[1].value}
                    </td>
                </tr>
            </table>
        </div>
    );
}
export default Content;