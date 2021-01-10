<?php

namespace Tiborsulyan\Autologout;

use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;

class KeepaliveController implements RequestHandlerInterface
{
    public function handle(Request $request): Response
    {
        return new JsonResponse("");
    }
}