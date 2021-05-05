import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, users => {
    return users
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getFollowingProgression = (state) => {
    return state.usersPage.followingProgression
}
export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getPages = createSelector(getPageSize, getTotalCount, (pageSize, totalCount) => {
    let pageCount = Math.ceil(totalCount / pageSize);
    let pages=[];
    for(let i=1;i <= pageCount;i++){
        pages.push(i)
    }
    return pages
})