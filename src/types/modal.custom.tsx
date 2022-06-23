import { SkincareData } from "./skincare"

interface CustomModalData {
    open: boolean
    onClose: () => void
    data: SkincareData
}

export type { CustomModalData }