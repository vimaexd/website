import React from 'react'
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function CreditBlock(props: {
    roles: string[];
    name: string;
    link: string;
    imageUrl: string | StaticImport;
}) {
  return (
    <div className="grid grid-cols-[32px_1fr] gap-x-4 gap-y-2 p-6 bg-ctp-surface0 rounded-lg">
        
        <Image src={props.imageUrl} width={32} height={32} alt="Profile picture" className="rounded-full"></Image>
        <a href={props.link || "#"}>
            <h3 className="col-start-2 font-semibold text-3xl self-center">{props.name}</h3>
        </a>
        <ul className="col-start-2">
            {props.roles.map(r => <li>{r}</li>)}
        </ul>
    </div>
  )
}
