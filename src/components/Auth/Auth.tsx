

interface Props {
    userName?:string | "Guest";
    isLoggedIn:boolean | false;
}

 function Auth(prop: Props) {
  return (
    prop.isLoggedIn ? <h2>Enjoy your visit {prop.userName}</h2>:
                        <h2>Please log in</h2>
  )
}

export default Auth;