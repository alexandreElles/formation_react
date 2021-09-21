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
        fill:string,
        color:string,
        textDecoration:string
        fontSize:number,
        fontStyle:string,
        fontWeight:number
    }
}

const MemeViewer = (props:MemeViewerProps) => {
    const img = props.meme.image? props.meme.image:{width:1000,height:1000, url:'/Meme/spiderman.jpg'};
    return(
    <svg className={styles.MemeViewer} data-testid="MemeViewer" viewBox={`0 0 ${img.height} ${img.width}`}>
      <image href={img.url} width={img.width} height={img.height}/>
      <text x={props.meme.x} y={props.meme.y} style={{
          fill: props.meme.fill,
          color:props.meme.color,
          textDecoration: props.meme.textDecoration,
          fontStyle: props.meme.fontStyle,
          fontWeight: props.meme.fontWeight,
          fontSize: props.meme.fontSize
      }}>{props.meme.text}

      </text>
    </svg>)
}

/*MemeViewer.propTypes = {
  meme:PropTypes.object.isRequired,

};*/

MemeViewer.defaultProps = {};

export default MemeViewer;
