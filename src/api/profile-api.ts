import {profileType} from "../redux/profile-reducer";
import {APIResponseType, instance, savePhotoResponseDataType} from "./api";

const profileAPI = {
    getProfile(userId: number){
        return instance.get<profileType>(`profile/${userId}`).then(res => res.data)
    },
    getStatus(userId: number){
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string){
        return instance.put<APIResponseType>(`profile/status`, {status: status})
    },
    savePhotoApi(photoFile: File){
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<APIResponseType<savePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    saveNewProfile(profile: profileType){
        return instance.put(`profile`, profile)
    }
}

export default profileAPI
