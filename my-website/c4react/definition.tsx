/******************************************************************************
 * This file was generated
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/
/* eslint-disable */

import type { DiagramView } from '@likec4/diagrams'
import { LikeC4 } from '@likec4/diagrams'

export type LikeC4ViewId = 'index';
export const LikeC4Views = {  'index': ({id:'index',viewOf:'cloud',title:'Cloud System - Landscape',description:null,tags:null,links:null,docUri:'file:///c%3A/Users/danilov.s/Documents/mis/architecture-tools-tests/likec4/my-website/src/landscape.c4',relativePath:'/c%3A/Users/danilov.s/Documents/mis/architecture-tools-tests/likec4/my-website/src',autoLayout:'TB',width:810,height:578,nodes:[{description:null,technology:null,tags:null,links:null,kind:'system',title:'Cloud System',id:'cloud',parent:null,level:0,color:'primary',shape:'rectangle',children:['cloud.service2','cloud.monolith','cloud.records'],inEdges:[],outEdges:[],depth:1,position:[8,8],size:{width:794,height:562},labels:[{fontSize:13,fontStyle:'bold',color:'#bfdbfeb3',text:'CLOUD SYSTEM',pt:[8,15],align:'left',width:104}]},{description:null,technology:null,tags:null,links:null,kind:'service',title:'Some Service 2',id:'cloud.service2',parent:'cloud',level:1,color:'primary',shape:'rectangle',children:[],inEdges:[],outEdges:['cloud.service2:cloud.monolith','cloud.service2:cloud.records'],position:[244,64],size:{width:321,height:180},labels:[{fontSize:20,color:'#eff6ff',text:'Some Service 2',pt:[91,97],align:'left',width:142}]},{description:null,technology:null,tags:null,links:null,kind:'service',title:'Mis Monolith',id:'cloud.monolith',parent:'cloud',level:1,color:'primary',shape:'rectangle',children:[],inEdges:['cloud.service2:cloud.monolith'],outEdges:[],position:[39,358],size:{width:321,height:180},labels:[{fontSize:20,color:'#eff6ff',text:'Mis Monolith',pt:[105,96],align:'left',width:113}]},{description:'test',technology:null,tags:null,links:null,kind:'service',title:'Records',id:'cloud.records',parent:'cloud',level:1,color:'primary',shape:'rectangle',children:[],inEdges:['cloud.service2:cloud.records'],outEdges:[],position:[449,358],size:{width:321,height:180},labels:[{fontSize:20,color:'#eff6ff',text:'Records',pt:[124,85],align:'left',width:75},{fontSize:14,color:'#bfdbfe',text:'test',pt:[150,109],align:'left',width:23}]}],edges:[{id:'cloud.service2:cloud.monolith',parent:'cloud',source:'cloud.service2',target:'cloud.monolith',label:null,relations:['40c88133029a309fa06df4902a41766749ef4612'],points:[[343,244],[320,277],[294,314],[270,348]],headArrowPoint:[263,358],headArrow:[[273,349],[265,355],[268,345]]},{id:'cloud.service2:cloud.records',parent:'cloud',source:'cloud.service2',target:'cloud.records',label:'delegates some work',relations:['69f47d02a76ec117db27b9f09120a3c1043e2c5d'],points:[[468,244],[491,277],[517,314],[541,348]],headArrowPoint:[548,358],labels:[{fontSize:13,color:'#c6c6c6',text:'delegates some work',pt:[523,305],align:'left',width:123}],labelBBox:{x:519,y:288,width:131,height:21},headArrow:[[543,345],[546,355],[538,349]]}]} as unknown) as DiagramView
} as const satisfies Record<LikeC4ViewId, DiagramView>

export type LikeC4Views = typeof LikeC4Views

export const {
  // guard
  isViewId,
  // React hook to use location hash for ViewId
  useViewId,
  // React component to display diagram
  Diagram,
  // React component to display diagram in responsive container
  Responsive,
  // React component to display diagram in fullscreen container
  Fullscreen,
  // React component to embed diagram and open browser on click
  Embedded,
  // React component to browse diagrams in fullscreen container
  Browser,
} = LikeC4.create<LikeC4ViewId>(LikeC4Views)

export type DiagramProps = LikeC4.DiagramProps<LikeC4ViewId>
export type ResponsiveProps = LikeC4.ResponsiveProps<LikeC4ViewId>
export type FullscreenProps = LikeC4.FullscreenProps<LikeC4ViewId>
export type EmbeddedProps = LikeC4.EmbeddedProps<LikeC4ViewId>
export type BrowserProps = LikeC4.BrowserProps<LikeC4ViewId>

// Re-export types
export type {
  DiagramApi,
  Fqn,
  Element,
  RelationID,
  Relation,
  NodeId,
  EdgeId,
  ViewID,
  ComputedView,
  LikeC4Theme,
  DiagramNode,
  DiagramEdge,
  DiagramLabel,
  DiagramView
} from '@likec4/diagrams'
