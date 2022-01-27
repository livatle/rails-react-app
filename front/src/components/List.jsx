import React, {useEffect, useState} from "react";
import { getList } from '../lib/api/post'

const List = () => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        handleGetList();
    }, []);

    const handleGetList = async () => {
        try {
          const res = await getList();
          console.log(res.data);
          setDataList(res.data);
        } catch (e) {
          console.log(e);
        }
    };

    return (
        <div className="list">
            <table className="table">
                {dataList.map((item, index) => (
                    <div className="post">
                        <thead>
                            <tr>
                                <th>名前</th>
                                <th>内容</th>
                            </tr>
                        </thead>
                        <tbody key={index}>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.content}</td>
                            </tr>
                        </tbody>
                    </div>
                ))}
            </table>
        </div>
    )
}

export default List