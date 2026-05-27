'use client';

import Link from 'next/link';

export default function Home() {
  const tasks = [
    { href: '/', label: 'home' },
    { href: '/pages/1-dars', label: '1-dars uyga vazifa' },
    { href: '/pages/2-classwork', label: '2-dars darsdagi vazifa' },
    { href: '/pages/2-homework', label: '2-dars uyga vazifa' },
    { href: '/pages/2-homework2', label: '2-dars uyga qoshimcha vazifa' },
    { href: '/pages/3-dars', label: '3-dars uyga vazifa' },
    { href: '/pages/3-dars-qoshimcha', label: '3-dars qoshimcha uyga vazifa' },
    { href: '/pages/4-classwork', label: '4-dars darsdagi vazifa' },
    { href: '/pages/4-homework', label: '4-dars uyga vazifa' },
    { href: '/pages/box-model', label: 'box-model' },
    { href: '/pages/4-classwork2', label: '4-2-dars darsdagi vazifa' },
    { href: '/pages/4-homework2', label: '4-2-dars uyga vazifa' },
    { href: '/pages/5-classwork', label: '5-dars darsdagi vazifa' },
    { href: '/pages/5-form', label: '5-dars darsdagi vazifa form' },
    { href: '/pages/5-homework', label: '5-dars uyga vazifa' },
    { href: '/pages/6-classwork', label: '6-dars darsdagi vazifa' },
    { href: '/pages/6-homework', label: '6-dars uyga vazifa' },
    { href: '/pages/7-homework', label: '7-dars darsdagi vazifa' },
    { href: '/pages/7-homework2', label: '7-dars uyga vazifa' },
    { href: '/pages/8-classwork', label: '8-dars darsdagi vazifa' },
    { href: '/pages/8-homework', label: '8-dars uyga vazifa' },
    { href: '/pages/9-classwork', label: '9-dars darsdagi vazifa' },
    { href: '/pages/9-homework', label: '9-dars uyga vazifa' },
    { href: '/pages/10-classwork', label: '10-dars darsdagi vazifa' },
    { href: '/pages/10-homework', label: '10-dars uyga vazifa' },
    { href: '/pages/10-1-homework', label: '10_1-dars uyga vazifa' },
    { href: '/pages/10-2-classwork', label: '10_2-dars uyga vazifa' },
    { href: '/pages/11-classwork', label: '11-dars darsdagi vazifa' },
    { href: '/pages/11-homework', label: '11-dars uyga vazifa' },
    { href: 'https://www.figma.com/design/oOvoQ1s5DuCzvRfpcqpy5m/FlexBox?node-id=0-1&p=f&t=53FVZBJrGkzs3sW6-0', label: '12-dars darsdagi vazifa', external: true },
    { href: '/pages/12-homework', label: '12-dars uyga vazifa' },
    { href: 'https://www.figma.com/design/VYBPhwa676y3Tzaw9tUs6v/Postion?node-id=0-1&p=f&t=3aNkehurLtuVPqpx-0', label: '13-dars uyga vazifa', external: true },
    { href: 'https://www.figma.com/design/3wENG88C5zqGPML5DG2hEQ/FlexBox--Mars-?node-id=1-2&t=7vfoB0MyhpZDIgOb-0', label: '14-dars uyga vazifa', external: true },
    { href: 'https://www.figma.com/design/9TThfIJENoZMXBdEmWeJWB/Pubg-For-Mars?node-id=4-39&t=nMLgcbm0KCNK82oJ-0', label: '15-dars uyga vazifa', external: true },
    { href: 'https://www.figma.com/file/46u00TKPOMRziC84sbuIUc/TRAFALGAR-MARS?type=design&node-id=0%3A1&mode=design&t=lfvqAHTLwi1uLqgx-1', label: '16-dars uyga vazifa', external: true },
    { href: '/pages/flex-1-homework2', label: 'flex-1 uyga vazifa' },
    { href: '/pages/flex-2', label: 'flex-2 uyga vazifa' },
  ];

  return (
    <main>
      <nav>
        {tasks.map((task) =>
          task.external ? (
            <a
              key={task.label}
              href={task.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {task.label}
            </a>
          ) : (
            <Link key={task.label} href={task.href}>
              {task.label}
            </Link>
          )
        )}
      </nav>
    </main>
  );
}
