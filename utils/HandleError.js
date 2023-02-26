import { useRouter } from "next/router";

export default function HandleError(errorId) {
    const router = useRouter()
    router.push('/error/' + errorId)
}