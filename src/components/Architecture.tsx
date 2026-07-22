// import { useState } from "react";


// export interface FormData{
//   name: string
//   email: string
//   phoneNo: string
//   password: string
// }

// interface FormDataProps{
//   onSubmit: (data: FormData) => void;
//   isLoading: boolean
// }

// export const ApplicationForm: React.FC<FormDataProps> = ({onSubmit, isLoading = false}) => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     password: "",
//     phoneNo: ""
//   })

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     try{

//       const response = await fetch("https://jsonplaceholder.com", {
//         method: "POST",
//         headers: {
//           "Conent-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password,
//           phoneNo: formData.phoneNo
//         })
//       })
      
//       if(!response.ok){
//           throw new Error("Something went wrong, Please try again")
//         }

//       const data = response.json()
//       onSubmit(data)

//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//         phoneNo: ""
//       })

//     } catch(e){
//       console.error(e)
//     }finally{

//     }

    

//   }


//   return (
//     <form onSubmit={handleSubmit}>
//       <input 
//       type="text"
//       value={formData.name}
//       onChange={(e) => setFormData({...formData, name: e.target.value})} 
//       />
//     </form>
//   )
// }