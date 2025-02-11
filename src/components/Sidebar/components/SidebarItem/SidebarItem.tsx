import React from "react"
import { NavLink, useNavigate, useParams } from "react-router";

import { IChat } from "../../../../services/chats/interfaces";
import classNames from "classnames";
import DeleteIcon from "../../../../assets/deleteIcon";
import { useRemoveChatMutation } from "../../../../services/chats/chats";

const SidebarItem: React.FC<Omit<IChat, 'messages'>> = ({ id, title }) => {
  const params = useParams()
  const navigate = useNavigate()
  const [removeChat] = useRemoveChatMutation()

  const handleRemoveChat = async (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault()

    await removeChat(id.toString())
    if (params?.id == id.toString()) {
      navigate('/terminal')
    }
  }

  return (
    <NavLink 
      to={`/terminal/${id}`} 
      className={({ isActive }) => classNames({isActive: isActive})}
    >
      {title}
      <DeleteIcon className="delete-icon" onClick={handleRemoveChat} />
    </NavLink>
  );
}

export default SidebarItem