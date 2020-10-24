import React from 'react';


const renderHelper = ( block, idx ) => {

    const renderHTML = (string) => {
        return {__html: string};
    }

    const blockType = block.fieldGroupName;
    switch(blockType) {
        case 'Image':
            return <img src={block.image.mediaItemUrl} alt="" key={idx}/>;
        case 'TextEditor':
            return <div dangerouslySetInnerHTML={renderHTML(block.text)} key={idx}></div>
        default:
            return null;
    }
}

export default renderHelper;