import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { cloneElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children: ReactElement

}
export function ActiveLink({children, ...rest}: ActiveLinkProps){
    const {asPath} = useRouter()
    let isActive = false;

    if(asPath == rest.href || asPath == rest.as){
        isActive = true;
    }

    return(
        <Link {...rest} >
            {cloneElement(children, {
                color: isActive ? 'orange':'gray.700'
            })}
        </Link>
    )
}