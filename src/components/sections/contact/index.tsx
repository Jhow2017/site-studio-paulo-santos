import React from 'react';
import { Button } from '@ds/components/global';
import { Input } from '@ds/components/form';
import { Textarea } from '@ds/components/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@ds/components/form';

const Contact = () => {
    return (
        <section id="contato" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Entre em <span className="text-red-600">Contato</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Estamos prontos para transformar seu projeto em
                        realidade. Entre em contato e agende uma visita ao nosso
                        estúdio.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-300 mb-2"
                                    >
                                        Nome
                                    </label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Seu nome"
                                        className="bg-gray-900 border-gray-700 text-white focus:border-red-600 focus:ring-red-600"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-300 mb-2"
                                    >
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        className="bg-gray-900 border-gray-700 text-white focus:border-red-600 focus:ring-red-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="service"
                                    className="block text-gray-300 mb-2"
                                >
                                    Tipo de Serviço
                                </label>
                                <Select>
                                    <SelectTrigger className="bg-gray-900 border-gray-700 text-white focus:border-red-600 focus:ring-red-600 w-full">
                                        <SelectValue placeholder="Selecione o serviço" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-900 border-gray-700 text-white">
                                        <SelectItem value="producao">
                                            Produção Musical
                                        </SelectItem>
                                        <SelectItem value="ensaio">
                                            Sala de Ensaio
                                        </SelectItem>
                                        <SelectItem value="mixagem">
                                            Mixagem e Masterização
                                        </SelectItem>
                                        <SelectItem value="gravacao">
                                            Gravação
                                        </SelectItem>
                                        <SelectItem value="outro">
                                            Outro
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label
                                    htmlFor="date"
                                    className="block text-gray-300 mb-2"
                                >
                                    Data Pretendida
                                </label>
                                <Input
                                    id="date"
                                    type="date"
                                    className="bg-gray-900 border-gray-700 text-white focus:border-red-600 focus:ring-red-600"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-300 mb-2"
                                >
                                    Mensagem
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder="Descreva seu projeto ou necessidade..."
                                    className="bg-gray-900 border-gray-700 text-white focus:border-red-600 focus:ring-red-600 min-h-[120px]"
                                />
                            </div>
                            <Button
                                type="submit"
                                variant="destructive"
                                className="w-full !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                Enviar Mensagem
                            </Button>
                        </form>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">
                                Informações de Contato
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-map-marker-alt text-red-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">
                                            Endereço
                                        </h4>
                                        <p className="text-gray-300">
                                            Rua Jonathas Pedrosa, 150 - Centro
                                        </p>
                                        <p className="text-gray-300">
                                            Manaus - AM, 69020-255
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-phone-alt text-red-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">
                                            Telefone
                                        </h4>
                                        <p className="text-gray-300">
                                            (92) 99367-3868
                                        </p>
                                        <p className="text-gray-300">
                                            (92) 99367-3868 (WhatsApp)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-envelope text-red-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p className="text-gray-300">
                                            contato@ritmostudio.com.br
                                        </p>
                                        <p className="text-gray-300">
                                            agendamento@ritmostudio.com.br
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-clock text-red-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">
                                            Horário de Funcionamento
                                        </h4>
                                        <p className="text-gray-300">
                                            Segunda a Sexta: 08h às 17h
                                        </p>
                                        <p className="text-gray-300">
                                            Sábado: 08h às 12h
                                        </p>
                                        <p className="text-gray-300">
                                            Domingo: Fechado
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">
                                Siga-nos
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-900 hover:bg-red-600/20 flex items-center justify-center transition-colors duration-300 cursor-pointer"
                                >
                                    <i className="fab fa-instagram text-xl text-red-600"></i>
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-900 hover:bg-red-600/20 flex items-center justify-center transition-colors duration-300 cursor-pointer"
                                >
                                    <i className="fab fa-facebook-f text-xl text-red-600"></i>
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-900 hover:bg-red-600/20 flex items-center justify-center transition-colors duration-300 cursor-pointer"
                                >
                                    <i className="fab fa-youtube text-xl text-red-600"></i>
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-900 hover:bg-red-600/20 flex items-center justify-center transition-colors duration-300 cursor-pointer"
                                >
                                    <i className="fab fa-spotify text-xl text-red-600"></i>
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-900 hover:bg-red-600/20 flex items-center justify-center transition-colors duration-300 cursor-pointer"
                                >
                                    <i className="fab fa-whatsapp text-xl text-red-600"></i>
                                </a>
                            </div>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-4">
                                Localização
                            </h3>
                            <div className="aspect-video bg-gray-800 rounded-md overflow-hidden">
                                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                    <i className="fas fa-map-marked-alt text-6xl text-red-600/50"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
