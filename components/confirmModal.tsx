import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { AlertDialogDescription, AlertDialogFooter, AlertDialogContent, AlertDialog, AlertDialogCancel, AlertDialogAction, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";


interface ConfirmModalProps {
    children: React.ReactNode;
    disabled: boolean;
    disription: string;
    title: string;
    onConfirm: () => void;

}


const confirmModal = ({ children, disabled, disription, title, onConfirm }: ConfirmModalProps) => {

    const handleConfirm = () => {
        onConfirm();
    }


    return <AlertDialog>
        <AlertDialogTrigger asChild>
            {children}
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    {title}
                </AlertDialogTitle>
                <AlertDialogDescription>
                    {disription}
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancle</AlertDialogCancel>
                <AlertDialogAction disabled={disabled} onClick={handleConfirm}> Confirm</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>

}

export default confirmModal;