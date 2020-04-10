/**
 * AUTOR: Miguel A. Hernandez Z.
 * FECHA: 18/11/2019
 */

export class GlobalConstants {
    public static singleSpaProps: any = { };
    public static token: Function = () => {
        let token: string = "";

        try {
            if(typeof GlobalConstants.singleSpaProps["authToken"] !== "undefined") {
                if(GlobalConstants.singleSpaProps["authToken"].toLowerCase().indexOf("bearer") == -1) {
                    token = "Bearer " + GlobalConstants.singleSpaProps["authToken"];
                }
                else {
                    token = GlobalConstants.singleSpaProps["authToken"];
                }
            }
            else {
                token = localStorage.getItem(location.hostname);
            }
        }
        catch(e){
            token = null;
        }

        return token;
    }
}