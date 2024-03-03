import {toast} from "react-hot-toast"
import { apiconnector } from "../apiconnector"
// import {gameendpoints} from "../apis/api"
import {setFlags,setLevel,setScore,setLoading,setquestions,setquestionNo} from "../../slices/gameSlice"
// const {CONTROL_API} = gameendpoints
import env from "react-dotenv"

export function control(questionNo, level, email, ans){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading..")
        dispatch(setLoading(true))
        try {
            const response = await apiconnector("POST","https://iste-ctf-backend.vercel.app/game/control",{
                questionNo,
                level,
                email,
                answer:ans
            })
            if(!response){
                throw new Error(response.data.message)
            }
            console.log("control",response)
            if(response.data.id==1){
                toast.success("Already Submitted");
                return 2;
            }else if(response.data.id==3){
                toast.error("Wrong Answer")
            }else{
                toast.success("Updated Succesfull");
                dispatch(setLevel(response.data.data.level))
                dispatch(setScore(response.data.data.teamPoints))
                dispatch(setquestionNo(response.data.data.questionNo))
                return 1;
            }
           
        } catch (error) {
            console.log(error); 
        }
        finally{
            dispatch(setLoading(false))
            toast.dismiss(toastId)
        }
    }
}

export function getQuestions(level){
    return async(dispatch)=>{
        const toastId = toast.loading("Loading..")
        dispatch(setLoading(true))
        try {
            const response = await apiconnector("POST","https://iste-ctf-backend.vercel.app/game/getquestions",{
                level:level
            })
            if(!response){
                throw new Error(response.data.message)
            }
            toast.success("Welcome")
            // console.log("prijting resp",response);
            dispatch(setquestions(response.data.data))
        } catch (error) {
            console.log(error);
        }
        finally{
            dispatch(setLoading(false))
            toast.dismiss(toastId)
        }
    }
}