import axios from "axios";
export class GroupService {
    static serverUrl = process.env.REACT_APP_CONTACT_SERVER_URL ? process.env.REACT_APP_CONTACT_SERVER_URL : "";

  //get all Groups
   static getALLGroups(){
        let dataUrl = `${this.serverUrl}/groups`;
        return axios.get(dataUrl);
   }

    //get a Group
    static getGroup(groupId){
        let dataUrl = `${this.serverUrl}/groups/${groupId}`;
            return axios.get(dataUrl);
    }
}