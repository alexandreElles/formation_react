import React from 'react';
import styles from './MemeViewer.module.scss';

interface MemeViewerProps{
    meme:{
        id?: number,
        name: string
        text: string,
        x: number,
        y: number,
        imageId: number
        image:{
            id:number,
            url: string,
            width: number,
            height: number
        },
        style:{
            fill:string,
            textDecoration:string
            fontSize:number,
            fontStyle:string,
            fontWeight:number
        }
    }
}

const MemeViewer = (props:MemeViewerProps) => {
  return(
    <svg className={styles.MemeViewer} data-testid="MemeViewer" viewBox={`0 0 ${props.meme.image.height} ${props.meme.image.width}`}>
      <image href={props.meme.image.url} width={props.meme.image.width} height={props.meme.image.height}/>
      <text x={props.meme.x} y={props.meme.y} style={props.meme.style}>{props.meme.text}

      </text>
    </svg>
);};

/*MemeViewer.propTypes = {
  meme:PropTypes.object.isRequired,

};*/

MemeViewer.defaultProps = {};

export default MemeViewer;
