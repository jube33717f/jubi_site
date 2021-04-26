/**
 * @file Badge component
 * @date 2020-04-01
 * @author Jubi
 * @lastModify Jubi 2020-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import {badge,text} from './style'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
{/** Photo display*/}
const Badge = ()=>{
    return (
        <div css = {badge}>
            <div css = {text}>
                Jubi
            </div>
        </div>
    )
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Badge