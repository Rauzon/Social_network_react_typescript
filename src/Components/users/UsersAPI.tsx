import React, {FC, useEffect, useState} from 'react';
import s from './users.module.css'
import {UserItem} from "./UserItem";
import {authRedirectHOC} from "../../hoc/authRedirectHOC";
import {CircularProgress} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import {FaArrowCircleUp} from 'react-icons/fa';
import {UserType} from "../../redux/reducers/usersPage-reducer";


//type for button up
type StyleButtonUpType = {
    transition: string
    strokeDasharray?: string
    strokeDashoffset?: number
}

export type UsersPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setIsFetching: (isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
    pagination: (page: number, pageSize: number) => void
    users: Array<UserType>
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    isFollowingInProgress: number[]
}

export const UsersAPI: FC<UsersPropsType> = (props) => {

    const [showScroll, setShowScroll] = useState<boolean>(false)

    useEffect(() => {
        if (props.users.length === 0) {
            props.getUsers(props.currentPage, props.pageSize)
        }
    });

    useEffect(() => {
        if (props.isFetching) {
            window.addEventListener('scroll', checkScrollTop, true)
        }
        return () => window.removeEventListener('scroll', checkScrollTop)

    }, [window.pageYOffset, props.currentPage])

    // button up

    function checkScrollTop() {
        if (!showScroll && window.pageYOffset > 300) {
            setShowScroll(true)
        } else {
            setShowScroll(false)
        }
    };


    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    // --- button up ---

    let setCurrentPage = (p: number) => {
        props.pagination(p, props.pageSize)
    }


    //pagination
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let arrPageCount = [];


    for (let i = 1; pageCount >= i; i++) {
        arrPageCount.push(i)
    }
    // ---- pagination ----

    return (
        <div className={s.content__wrapper}>
            {props.isFetching && <CircularProgress className={s.circleProgress}/>}
            {/*pagination*/}
            {
                <div className={s.content__wrapper_pagination}>
                    <Pagination count={pageCount} siblingCount={1} color="primary"
                                onChange={(_, page) => setCurrentPage(page)}/>
                </div>
            }
            {/*-----pagination-----*/}
            {/*button up*/}
            <div className={s.scrollTop_wrapper}>
                <FaArrowCircleUp
                    className={s.scrollTop}
                    onClick={scrollTop}
                    style={{height: 40, display: showScroll ? 'flex' : 'none'}}
                />
            </div>
            {/*--- button up ---*/}
            {
                props.users.map(u => {

                    const unfollow = (userId: number) => {
                        props.unfollow(userId)
                    }

                    const follow = (userId: number) => {
                        props.follow(userId)
                    }

                    return <UserItem key={u.id}
                                     id={u.id}
                                     status={u.status}
                                     photos={u.photos}
                                     followed={u.followed}
                                     unfollow={unfollow}
                                     follow={follow}
                                     name={u.name}
                                     isFollowingInProgress={props.isFollowingInProgress}/>

                })
            }
        </div>
    )
}

export default authRedirectHOC(UsersAPI)
