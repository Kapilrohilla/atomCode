import AnchorColumn from './FooterChild/AnchorColumn';
import './footer.css';


export default function Footer () {
    const col1 = [{id: 1,data: 'Installation'},{id: 2,data: 'Theme setup'},{id: 3,data: 'Grid'},{id: 4,data: 'Atoms'},{id: 5,data: 'Molecules'},{id: 6,data: 'Function'},]
    const col2 = [{id:1,data: 'Features'},{id: 2,data: 'Design'},{id: 3,data: 'Development'}];
    const col3 = [{id:1,data: 'Sketch file'},{id:2,data: 'Github'}];
    const col4 = [{id:1,data: 'Showcase'},{id:2,data: 'Contribute'}];
    return (
      <>
        <div className="anchors">
            <AnchorColumn heading='Docs' listData={col1}/>
            <AnchorColumn heading='Atomize' listData={col2} />
            <AnchorColumn heading="Resources" listData={col3} />
            <AnchorColumn heading="About" listData={col4} />
      </div>
      <div className="developer">
        <p className="credit">cloned by {'cloned by {kapil rohilla}'}</p>
        <ul className="social">
          <li><a href="https://github.com/kapilrohilla">Github</a></li>
          <li><a href="https://github.com/kapilrohilla">Twitter</a></li>
          <li><a href="https://github.com/kapilrohilla">LinkedIn</a></li>
        </ul>
      </div> 
      </>
    )
}