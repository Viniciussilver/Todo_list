import * as C from './style'

export const IconsButton = ({finished, editTask, deleteTask}) => {

    return (
        <C.Box>
            <C.Check onClick={finished}/>
            <C.Edit onClick={editTask}/>
            <C.Trash onClick={deleteTask}/>
        </C.Box>
    )
}