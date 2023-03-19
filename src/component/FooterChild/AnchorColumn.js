// css is in footer.css file

export default function AnchorColumn({heading,listData}) {
    
    return (
        <div className="anchor-column">
          <h6>{heading}</h6>
          {
            listData.map((obj)=>{
                return <p key={obj.id}><a href="/">{obj.data}</a></p>
            })
          }
        </div>
    )
}