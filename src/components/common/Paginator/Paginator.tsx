import React, {useState} from "react";
import s from "./Paginator.module.css"
import cn from "classnames"
import vector from "../../../assets/images/vector.155c179d.png"

type PropsType = {
    currentPage: number,
    pages: Array<number>,
    onPageChanged: (pageNumber: number) => void,
    portionSize?: number,
    totalCount: number,
    pageSize: number
}

const Pagination = ({currentPage, pages, onPageChanged, portionSize = 10, ...props}:PropsType) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);

    let portionCount = Math.ceil(pageCount/ portionSize)
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber -1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.numberPage}>
            { portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1)}}>
                <img className={s.back} src={vector} alt="back" width="30%"/>
            </button>
            }

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <div className={s.spanDiv}>
                        <span className={cn(currentPage === p && s.spanPage)}
                              key={p}
                              onClick={() => onPageChanged(p)}>{p}</span>
                    </div>
                })}

            { portionCount > portionNumber  &&
            <button onClick={() => { setPortionNumber(portionNumber + 1)}}>
                <img className={s.next} src={vector} alt="next" width="30%"/>
            </button>
            }
        </div>
    )
}

export default Pagination;