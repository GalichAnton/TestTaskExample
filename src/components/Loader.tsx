const Loader = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', height:'100vh' }}>
      <div className="spinner-border text-primary" role="status" style={{width: '200px', height: '200px'}} >
          <span className="sr-only"></span>
        </div>
    </div>
  )
}

export default Loader
