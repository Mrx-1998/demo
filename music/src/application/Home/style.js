import styled from'styled-components';
//全局样式配置
import style from '../../assets/global-style';

export const Top = styled.div`
  /* 如果元素不是弹性盒对象的元素，则 flex-direction 属性不起作用 
  row 默认值。灵活的项目将水平显示，正如一个行一样。*/
  display: flex;
  flex-direction: row;
  /* 弹性盒项位于各行之间留有空白的容器内 */
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style ["theme-color"]};
  &>span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`

export const Tab = styled.div`
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: ${style ["theme-color"]};
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;
    &.selected {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`
export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`