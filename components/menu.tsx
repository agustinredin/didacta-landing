"use client"
import { RiSettings3Line } from "react-icons/ri"
import { HiMiniPencilSquare } from "react-icons/hi2"
import { AiOutlineHome } from "react-icons/ai"
import { GoSidebarCollapse } from "react-icons/go"
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb"
import { CiLogout } from "react-icons/ci"
import { useState } from "react"

export function Menu() {
    const [deploy, setDeployed] = useState(false)
    const handleClick = () => {
        setDeployed(prev => !prev)
    }


    return (
        <section className="flex min-h-screen bg-gray-50">
            <aside className="w-20 flex flex-col items-center bg-white border-r border-gray-200 py-6 ">
                <img src="/Logo_n_f_t.png" alt="Logo" className="w-1/2 pb-10" />

                <div className="flex flex-col gap-8 items-center">
                    <div className="flex flex-col items-center gap-1 cursor-pointer ">
                        <AiOutlineHome size={32} className="mono-card" />
                        <p className="text-xs">Home</p>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer ">
                        <HiMiniPencilSquare size={32} className="mono-card" />
                        <p className="text-xs">Chat</p>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer ">
                        <RiSettings3Line size={32} className="mono-card" />
                        <p className="text-xs">Settings</p>
                    </div>
                </div>
                <div className="h-full flex flex-col items-center justify-end gap-1 cursor-pointer">
                    <CiLogout size={32} className="mono-card" />
                    <p className="text-xs">Log out</p>
                </div>
            </aside>

            <div className="flex flex-1">
                {deploy && (
                    <aside className="w-64 bg-gray-50 border-r border-gray-200 py-6 px-4 flex-shrink-0">
                        <nav className="flex flex-col h-full">
                            <TbLayoutSidebarLeftCollapse
                                size={30}
                                className="mono-card cursor-pointer w-fit mb-4"
                                onClick={handleClick}
                            />
                            <ul className="space-y-4 text-gray-700 font-medium flex-1">
                                <li className="cursor-pointer hover:text-blue-500">Ejemplo</li>
                                <li className="cursor-pointer hover:text-blue-500">Ejemplo2</li>
                                <li className="cursor-pointer hover:text-blue-500">Ejemplo3</li>
                            </ul>
                        </nav>
                    </aside>
                )}

                <div className="flex-1 flex flex-col">
                    <header className="w-full h-16 flex items-center justify-between px-6 border-b border-gray-200 bg-white">
                        <div className="flex gap-4 items-center">
                            {!deploy && (
                                <button onClick={handleClick}>
                                    <GoSidebarCollapse size={30} className="mono-card cursor-pointer" />
                                </button>
                            )}
                            <h1 className="text-lg font-semibold text-gray-800">Home</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="px-3 py-1 border rounded-md text-sm text-gray-600 hover:bg-gray-100">
                                List
                            </button>
                            <button className="px-3 py-1 border rounded-md text-sm text-gray-600 hover:bg-gray-100">
                                Order by ▼
                            </button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm">
                                Add Content
                            </button>
                        </div>
                    </header>

                    <main className="flex-1 p-6">
                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 h-full">
                            <h2 className="font-medium text-gray-800 mb-2">Proyectos activos</h2>
                            <p className="text-sm text-gray-600">Listado de proyectos...</p>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )
}
