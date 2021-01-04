import React, {useCallback} from "react";
import s from "./users.module.css";
import {Pagination} from "@material-ui/lab";

type PaginationComponentType = {
    setCurrentPage: (currentPage: number) => void
    pagination: (page: number, pageSize: number) => void
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
}

export const PaginationComponent: React.FC<PaginationComponentType> = (props) => {

    let setCurrentPage = useCallback((p: number) => {
        props.pagination(p, props.pageSize)
    }, [props.pageSize])

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let arrPageCount = [];


    for (let i = 1; pageCount >= i; i++) {
        arrPageCount.push(i)
    }

    return <div className={s.content__wrapper_pagination}>
        <Pagination count={pageCount} siblingCount={1} color="primary"
                    onChange={(_, page) => setCurrentPage(page)}/>
    </div>

}