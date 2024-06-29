import { defineStore } from "pinia";

export const useSelectedAvatarStore = defineStore('avatar', {
    state: () => ({
        avatar: "Avatar1",
        // avatar: "/imgs/avatars/Avatar1.png",
    }),
    actions: {
        setAvatar(avatar) {
            this.avatar = avatar
        }
    }

})