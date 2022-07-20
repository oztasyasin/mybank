export async function login(user:any,service:any) {
    service.login(user).subscribe((data:any)=>{
        const response = data;
        if(response!=null){
          const key = response.key;
          const userId = response.userId;
          const userName = response.userName;
          localStorage.setItem("key",key);
          localStorage.setItem("userId",userId);
          localStorage.setItem("userName",userName);
          return true;
        }
        else
        {
            return false;
        }
    })
} 