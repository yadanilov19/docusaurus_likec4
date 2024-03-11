import { EmbeddedDiagram } from '@likec4/diagrams'
import { LikeC4Views } from './definition'

export default function IndexC4View({}) {
    return (
        <>
        <EmbeddedDiagram
            views={LikeC4Views}
            viewId={'index'}
        />
        </>
    );
}