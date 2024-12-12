import { getMenu } from "@/app/api/getMenu";

export const Menu = async () => {
  const menu = await getMenu(0);
  return (
    <menu>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </menu>
  );
};
