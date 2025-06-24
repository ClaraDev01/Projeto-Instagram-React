import Posts from "./Posts";
import SideBar from "./SideBar";

import Stories from "./Stories";

export default function Body() {
  return (
    <div className="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>
      <SideBar />
    </div>
  )
}