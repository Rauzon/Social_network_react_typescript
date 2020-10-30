import React, {ChangeEvent, useEffect, useState} from "react";

type EditebleStatusPropsType = {
    status: string
    updateStatus: (title: string) => void
    userId: string
}


export const EditableStatus: React.FC<EditebleStatusPropsType> = (props) => {

    let userId = props.userId

    if(!userId){
        userId = '7788'
    }

    const [editeMode, setEditeMode] = useState<boolean>(false)
    const [localStatus, setLocalStatus] = useState<string>(props.status)

    const onBlurHandler = () => {
        props.updateStatus(localStatus)
        setEditeMode(false)
    }

    useEffect(() => {
        if (localStatus !== props.status) {
            setLocalStatus(props.status)
        }
    }, [props.status])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    return <div>
        {(editeMode && userId == '7788') ?
                <div><input type="text" value={localStatus} onChange={onChangeHandler} onBlur={onBlurHandler}
                            autoFocus={true}/></div> :
                <div><span onDoubleClick={() => setEditeMode(true)}>{props.status}</span></div>}
    </div>
}