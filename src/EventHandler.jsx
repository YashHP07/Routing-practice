

export const EHandle=()=>{
    const activateLasers=()=>{
        alert('Hey, Groot this side')
    }
    return(
        <>
        <button onClick={activateLasers}>
        Activate Lasers
        </button>
        </>
    )
}