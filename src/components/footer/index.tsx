import React from 'react';

//@ds
import { Button } from '@ds/components/global';
import { Input } from '@ds/components/form';

//components
import Copyright from './copyright';

const Footer = () => {
    return (
        <footer className="bg-gray-900 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            <span className="text-red-600">STUDIO</span> PAULO
                            SANTOS
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Transformando ideias em música desde 2015. Estúdio
                            completo para produção musical e ensaios em Manaus.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/studiopaulosantos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/studiopaulosantos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://www.youtube.com/studiopaulosantos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a
                                href="https://www.spotify.com/studiopaulosantos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                            >
                                <i className="fab fa-spotify"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            Links Rápidos
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#inicio"
                                    className="text-gray-300 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                                >
                                    Início
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className="text-gray-300 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                                >
                                    Portfólio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#servicos"
                                    className="text-gray-300 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                                >
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#sobre"
                                    className="text-gray-300 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                                >
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contato"
                                    className="text-gray-300 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                                >
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Serviços</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                                >
                                    Produção Musical
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                                >
                                    Sala de Ensaio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                                >
                                    Mixagem e Masterização
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                                >
                                    Gravação
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                                >
                                    Produção de Videoclipes
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <p className="text-gray-300 mb-4">
                            Inscreva-se para receber novidades, promoções e
                            dicas sobre produção musical.
                        </p>
                        <div className="flex">
                            <Input
                                type="email"
                                placeholder="Seu e-mail"
                                className="bg-gray-800 border-gray-700 text-white focus:border-red-600 focus:ring-red-600 rounded-r-none"
                            />
                            <Button
                                variant="destructive"
                                className="rounded-l-none !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                Inscrever
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <Copyright />
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-300 cursor-pointer"
                            >
                                Política de Privacidade
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-300 cursor-pointer"
                            >
                                Termos de Uso
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-300 cursor-pointer"
                            >
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
