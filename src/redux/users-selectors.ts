import {createSelector} from "reselect";
import {AppStateType} from "./react-store";

const getUsersSelector = (state:AppStateType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, users => {
    return users
})

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getFollowingProgression = (state: AppStateType) => {
    return state.usersPage.followingProgression
}
export const getTotalCount = (state: AppStateType) => {
    return state.usersPage.totalCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getPages = createSelector(getPageSize, getTotalCount, (pageSize, totalCount) => {
    let pageCount = Math.ceil(totalCount / pageSize);
    let pages: Array<number> = []
    for(let i=1;i <= pageCount;i++){
        pages.push(i)
    }
    return pages
})